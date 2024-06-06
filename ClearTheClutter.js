const path = require('path');
const fs = require('fs');

fs.readdir('C:\\Users\\ADMIN\\Desktop\\web\\Clear the clutter\\files', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    for (file of files) {
        const ext = path.extname(file);
        const newDir = path.join("C:\\Users\\ADMIN\\Desktop\\web\\Clear the clutter\\files", ext.slice(1));
        if (!fs.existsSync(newDir)) {
            fs.mkdirSync(newDir, { recursive: true });
        }
        else {
            fs.rename(path.join('C:\\Users\\ADMIN\\Desktop\\web\\Clear the clutter\\files', file), path.join(newDir, file), (err) => {
                if (err) {
                    throw err;
                }
                else {
                    
                }
            })
        }
        
    }
});
