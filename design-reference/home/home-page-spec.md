# Home Page Spec

The home page should be a single-screen artistic landing page with no scrolling.

## Assets

Use these files from `/public/images/home/`:

- `center-art-rectangle.png`
  - Main central artistic rectangle.
  - Text should sit inside this image.

- `bottom-stars.png`
  - This is one bunch of stars.
  - It should be rendered multiple times across the bottom of the viewport.
  - Do not duplicate the file manually.
  - Use CSS/React to place several copies with different sizes, rotations, and horizontal positions.

- `decorative-star-1.png`
  - Small decorative floating star.

- `decorative-star-2.png`
  - Another decorative floating star.

- `decorative-wax-stamp.png`
  - Decorative accent element.

## Fonts

Title:
- Text: `between words`
- Font: Google Font `MonteCarlo`

Text inside the central rectangle:
- Use the same fun handwritten font used on the lyric-analysis page.
- If the lyric page uses `Reenie Beanie`, use `Reenie Beanie`.

## Layout

- The page should be exactly one viewport high.
- No vertical scrolling.
- The title should be near the top center.
- The center-art-rectangle should be centered horizontally and visually centered.
- The stars should hug the bottom of the viewport.
- The bottom stars should feel artistically scattered, not like a rigid repeated pattern.
- Use slight variations in size, rotation, and opacity for each bottom star bunch.
- The whole design should feel literary, scrapbook-like, whimsical, and personal.

## Responsiveness

Desktop:
- Large elegant title.
- Large central rectangle.
- Stars spread across the bottom.

Mobile:
- Title scales down.
- Center rectangle fits within 90vw.
- Bottom stars remain attached to the bottom.
- No horizontal overflow.
