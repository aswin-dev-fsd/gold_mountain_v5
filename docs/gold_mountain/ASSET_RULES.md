# ASSET RULES

## 1. Asset classes

Treat assets in four classes:

1. **Approved permanent assets** - confirmed Gold Mountain logo/photography that can be shipped.
2. **Provided but pending approval** - supplied assets whose final usage is not yet confirmed.
3. **Temporary external assets** - online images used during development.
4. **Missing assets** - items required but not yet supplied.

## 2. Current supplied assets

The supplied ZIP includes:
- Gold Mountain logo assets
- white/black logo asset
- a homepage image reference
- a wellness page image reference
- brand identity PDF
- website architecture PDF
- page specification text files

The screenshot supplied in the conversation also shows four local image assets: food, a statue, an aerial resort/property image and a resort/building image.

Important: the statue/Buddha image must not be used in the site under the current decisions. Prefer other imagery.

## 3. Online imagery rule

Online images are allowed while the final asset library is being prepared.

Selection rules:
- use reputable sources
- use only images with a traceable legitimate usage/licensing basis
- do not imply the image depicts Gold Mountain if it does not
- do not use an unrelated resort as though it were Gold Mountain
- avoid generic spa/yoga/Buddha imagery when it weakens the brand story
- prioritise mood/context imagery for temporary use when exact property imagery is unavailable

Each external image must have a source URL recorded in an asset registry or content data file, together with:
- source
- page URL
- asset URL if different
- usage/license note if known
- page/section where used
- status: `TEMPORARY`
- replacement required: `YES`

## 4. Provided images may be reused

The four local screenshot assets may be reused intelligently during development.

Avoid obvious repetitive loops. Reuse can vary by:
- crop
- focal position
- aspect ratio
- scale
- section role

Do not reuse an image so often that the site feels like it has only one photograph.

## 5. Image authenticity

Do not portray external imagery as documentary evidence of Gold Mountain.

When exact resort photography is unavailable, use image selections that communicate a relevant mood without making false claims.

## 6. Image technical rules

Prefer Next.js optimized image handling.

For static local assets:
- use the project public/static asset pipeline appropriately
- provide dimensions/aspect ratio
- use meaningful alt text where visible content conveys meaning
- use empty alt text for purely decorative imagery

For external assets:
- use explicit remote host configuration only for approved domains
- avoid open-ended remote image configuration

## 7. Replacement process

Every temporary asset must be listed in `REPLACEMENTS.md`.

When replacing it later:
- preserve the component/slot
- update the asset registry
- confirm the replacement is actually Gold Mountain material when authenticity matters
- run visual QA again

## 8. Prohibited imagery

Do not use:
- the unapproved Buddha/statue image
- generic fake luxury resort architecture presented as Gold Mountain
- AI-generated architecture pretending to show the property
- generic medical imagery
- heavily staged or fake-looking wellness scenes
- over-spiritualised stock imagery
- unlicensed/untraceable images
