# Build Single EXE - Automation Planner

## Prerequisites

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Install Electron Builder (if not already installed)**
   ```bash
   npm install --save-dev electron-builder
   ```

## Build Commands

### Option 1: Portable EXE (Single File - Recommended)
```bash
npm run build-portable
```

**Output:** `dist/Automation Planner-1.0.0-Portable.exe`
- Single EXE file
- No installation required
- Just copy and run anywhere
- ~150-200 MB file size

### Option 2: ZIP Package
```bash
npm run build-zip
```

**Output:** `dist/Automation Planner-1.0.0.zip`
- Smaller file size (~100 MB)
- Extract to folder and run
- No installer

### Option 3: All Windows Formats
```bash
npm run build-all
```

## After Build

The portable EXE will be located in:
```
dist/Automation Planner-1.0.0-Portable.exe
```

### To distribute:
1. Copy the EXE file
2. Send to users
3. User just double-clicks to run

## Notes

- **Antivirus Warning**: Some antivirus software may flag electron apps as suspicious. This is a known issue with electron-builder packaged apps. You may need to:
  - Add exclusion in antivirus
  - Sign the executable (requires code signing certificate)

- **File Size**: The portable version is large (~150-200 MB) because it includes the entire Electron runtime.

- **Windows Defender**: If Windows SmartScreen blocks the app:
  1. Click "More info"
  2. Click "Run anyway"

## Optional: Add Custom Icon

To add a custom icon:

1. Create an icon file: `icon.ico` (256x256 recommended)
2. Place it in the project root
3. Update `package.json`:
   ```json
   "win": {
     "icon": "icon.ico"
   }
   ```

## Troubleshooting

### "Cannot find module 'electron-builder'"
Run: `npm install`

### Build fails with memory error
Run with increased memory:
```bash
node --max-old-space-size=4096 node_modules/.bin/electron-builder build --win portable
```

### Portable EXE doesn't start
- Check if Windows Visual C++ Redistributable is installed
- Run as Administrator
- Check antivirus is not blocking it
