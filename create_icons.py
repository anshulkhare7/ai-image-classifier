from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_icon(size, filename, text="AI", color="#667eea"):
    img = Image.new('RGB', size, color=color)
    draw = ImageDraw.Draw(img)
    try:
        # Try to load a common font, adjust path if necessary
        font_size = int(size[0] / 3)
        font = ImageFont.truetype("arial.ttf", font_size) # May need to change font or ensure it's available
    except IOError:
        # Fallback to default font if specific font is not found
        font_size = int(size[0] / 3)
        # Try a slightly different way to load default font or a common one
        try:
            font = ImageFont.load_default()
        except IOError:
            # If all fails, create a very basic font placeholder (won't render text well but avoids crash)
            font = ImageFont.load_default() # last resort
            print(f"Warning: Font 'arial.ttf' not found, and default font failed. Using basic default for {filename}.")


    # Calculate text size using textbbox
    text_bbox = draw.textbbox((0,0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]

    position = ((size[0] - text_width) / 2, (size[1] - text_height) / 2 * 0.8) # Adjust Y for better centering
    draw.text(position, text, fill="white", font=font)

    # Ensure icons directory exists
    os.makedirs("icons", exist_ok=True)
    img.save(os.path.join("icons", filename))

create_placeholder_icon((192, 192), "icon-192x192.png")
create_placeholder_icon((512, 512), "icon-512x512.png")
print("Icons created successfully with Pillow.")
