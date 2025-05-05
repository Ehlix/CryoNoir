import * as fs from 'fs';
import sharp from 'sharp';

const generateTheme = async () => {
  const { base, baseNoitalics, alt, altNoitalics, schema, svg } = await import('./theme.mjs');fs.writeFile(
    'themes/svart-galla-theme.json',
    schema([base, baseNoitalics, alt, altNoitalics]),
    (err) => err && console.log(err),
  );
  await sharp(Buffer.from(svg(base).trim()), { density: 400 })
    .png()
    .toFile('assets/colors.png');
  console.log(`assets saved (${new Date().toTimeString()})`);
};

generateTheme();
