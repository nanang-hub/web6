import os
from PIL import Image

def resize_images(input_folder, output_folder, max_width):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
        
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            try:
                img_path = os.path.join(input_folder, filename)
                img = Image.open(img_path)
                
                # Calculate the new height to maintain aspect ratio
                width, height = img.size
                if width > max_width:
                    new_height = int((max_width / width) * height)
                    img = img.resize((max_width, new_height))
                
                # Save the resized image
                img.save(os.path.join(output_folder, filename), quality=85, optimize=True)
                print(f"Resized and saved: {filename}")
                
            except Exception as e:
                print(f"Could not process {filename}: {e}")

# --- CONFIGURATION ---
input_dir = 'img' # Folder where your original images are
output_dir = 'resized' # Folder where resized images will be saved
target_max_width = 1000

resize_images(input_dir, output_dir, target_max_width)