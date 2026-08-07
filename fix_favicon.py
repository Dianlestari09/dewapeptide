import glob

target = "<link rel='icon' type='image/jpg' href='assets/images/logo.png'><link rel='icon' type='image/jepg' href='assets/images/logo.png'><link rel='icon' type='image/png' href='assets/images/logo.png'><link rel='icon' type='image/webp' href='assets/images/logo.png'>"
replacement = "<link rel='icon' href='assets/images/logo.png' type='image/png'>"

for filepath in glob.glob('d:/Project/dewapeptide/*.html'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace(target, replacement)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done!')
