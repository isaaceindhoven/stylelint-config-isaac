# Stylelint configuration for SCSS

![node](https://img.shields.io/node/v/@isaac.frontend/stylelint-config-scss.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/isaaceindhoven/stylelint-config-scss.svg)
![GitHub contributors](https://img.shields.io/github/contributors/isaaceindhoven/stylelint-config-scss.svg)
![GitHub tag](https://img.shields.io/github/tag/isaaceindhoven/stylelint-config-scss.svg)


![logo](https://scotch.io/wp-content/uploads/2015/03/aesthetic-sass-architecture-style-organization.png)

The purpose of this package is to share SCSS Code Styling within Isaac BV.<br />
The configuration extends the [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines) configuration.


## How to configure

### Install npm package

```bash
npm i -D stylelint @isaac.frontend/stylelint-config-scss
```

### Create `.stylelintrc.json` 

```json
{
	"extends": "@isaac.frontend/stylelint-config-scss"
}
``` 

## Auto format on file save

### PHPStorm

> Add a new file watcher for watch changes on scss files.

<span style="color: #696969;">preferences</span> ⇢ <span style="color: #696969;">Tools</span> ⇢ <span style="color: #696969;">File Watchers</span>

Example configurations:

#### Files to watch

| Field | Value | Description |
| :-- | :-- | :-- |
| File Type | SCSS | Only watch for files with extension `.scss` |
| Scope | Current File | Only apply to current file open |


#### Tool to Run on Changes

| Field | Value | Description |
| :-- | :-- | :-- |
| Program | ${absoluteProjectPath}/node\_modules/.bin/stylelint | The binary `stylelint`, replace ${absoluteProjectPath} with your absolute project root | 
| Arguments | `--fix $FilePath$` | Pass argument to fix the file $FilePath$, note $FilePath$ is a micro used in PHPStorm |


By default files prefixed with `_` are ignored by the file watcher. To enable this add an environment variable:

```
COMPILE_PARTIAL=true
```

#### Advanced Options

Uncheck the *Auto-save edited files to trigger the watcher*. Because we are only interested when a file is being saved and not each time the file is updated.


### Visual Studio Code

> This documentation should be updated for developers using Visual Studio Code as editor.


### Updating this package

Please make sure you've created an user on npmjs and you have the rights to publish this package within the organisation [@isaac.frontend](https://www.npmjs.com/org/isaac.frontend). If not, please contact one of the contributors, defined in the package.json.

For release a new version use [release-it](https://www.npmjs.com/package/release-it).

After you've cloned this repository, did a `npm install`, edited and you're ready for a new release, just use `npm run release ${patch|minor|major}` in order to update git and publish to npmjs registry. Make shure you're registered with you SSH key to git and have a valid npm user to publish.