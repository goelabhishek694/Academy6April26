Create a project to scan the files in downloads folder and categorise them as compressed ( for rar, zip, 7zip files ), documents ( txt, xlsx, pdf, stc ) , audio and video files
Read the Downloads Directory: Use fs.readdir or fs.readdirSync to list all files in the downloads directory.
Categorize Files: Loop through the files, use the path module to extract file extensions, and categorize files based on their extension.
path.extname() method: This method returns the extension of the file from a file path.
Move Files: Create separate folders for each category and move files into the appropriate folder using fs.rename or fs.copyFile.