# The uspa-test FE Build process

uspa-test is using webpack as the main Front End build. This document outlines the step
ALL developers have to take to get it all up and running.

## External tools needing install

You have a couple of external tools you need to install on your machine. This we can't make
Visual Studio do for us automatically, unfortunately.

### Node.js

*Really, check if there's a new version of Node.js. Do it!*

1. Install the latest version of [Node.js]( https://www.nodejs.org/)
    1. Best way of doing this is by using Chocolatey, which is a package manager for Windows.
        1. To install Chocolatey, open up an elevated command prompt (**Right Click** > **Open As Administrator**) and run:
        ```console
        > @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

        > choco install nodejs
        ```
        2. You can also install it from their website - but it's much easier to keep it updated with Chocolatey, since you only need to run `choco upgrade nodejs` and you're done!

2. Set the newly installed [Node.js](https://www.nodejs.org/) as the preferred external tool in Visual Studio:
    1. Open up Visual Studio
    2. Go to **Tools** > **Options**
    3. Navigate to **Projects and Solutions** > **External Web Tools**
    4. Make sure `$(PATH)` is on the top of the list by clicking the up arrow to move it to the top of the list.
    ![Image of External Web Tools setup](https://raw.githubusercontent.com/wazp/fe-template/master/doc/vs_tools.png)
    
>This makes Visual Studio use the newly installed Node.js instead  
>of the seriously outdated internally installed version.

### NPM Task Runner

1. In Visual Studio, go to **Tools** > **Extensions and Updates**
2. Click **Online** in the left list, so you see online extensions ready to be installed.
3. Search for **NPM Task Runner** and install it.
![Image of External Web Tools setup](https://raw.githubusercontent.com/wazp/fe-template/master/doc/vs_npm_runner.png)
>If already installed, please check if there's any update to be downloaded.

### Visual Linter

We recommend that you install [VisualLinter](https://marketplace.visualstudio.com/items?itemName=JeanAlexanderWoldner.VisualLinter) so you get realtime JS linting in Visual Studio as well.

### Command line work

Ok, so we have the Visual Studio tools installed as well as the latest version of Node.js. When opening up the project in Visual Studio, the
nom packages should install automatically in the background. However, this doesn't always happen and personally I prefer to do it myself so I can see
exactly what is going on during the install. So, time for some `cmd` action!

1. Open up a command prompt in Elevated Mode (**Right Click** > **Open As Administrator**)
2. Navigate to the `uspa-test.web` directory, wherever you are saving your projects and run `npm install`:
   ```console
   > cd (Path to solution)\*.Web
   > npm install -g webpack
   > npm install
   ```
   A good way of getting to a cmd prompt, sitting in the correct directory from start, is to right-click your Web project and choose "Open Command Line" > "Default" - or whatever you prefer.
   ![Image of Open Command Line](https://raw.githubusercontent.com/wazp/fe-template/master/doc/vs_open_command.png)
   
3. This should install all the neccessary node modules needed.
>npm can bug out at times when installing many modules at once, so you may have to run it multiple times to make sure you get them all. Sometimes Visual Studio might be installing them in the background as well, and the installs clash.

## Running the build

package.json have been configured to run one of the npm scripts on *Project Open*, that starts a watcher in the background
that picks up on any changes to the source code to trigger a rebuild. It will also automatically run the dev build after it installs
all the node packages.

If you want to manually trigger a build, you can do so from the Task Runner Explorer (`Ctrl-Alt-Bkspace`), or if you prefer with the command line:
```console
> npm run dev
```

Other options include:
- `dev` for a development build
- `dev:watch` to start the watcher (auto compile on save file)
- `dev:stats` to generate html report of bundle size for development builds
- `build` for a production build
- `build:stats` to generate html report of bundle size for production builds
- `lint` to lint your .js/.vue files. Please note that this will always go through _all_ files, not just the ones that become bundled in the end.
- `lint:fix` to automatically fix common lint mistakes (like no new line etc)
- `e2e` to trigger E2E tests with crossbrowsertraining.com - NOT IMPLEMENTED YET

## Development Process

Just go about updating your files as usual, you have a watcher in the background that should pick up on changes automatically.

When adding new less files, just add them normally as an import to the main scss file they belong.

## Production Process

We compile everything during the deploy step with TeamCity/VSTS, so you do not need to worry about anything there.  
This is also why no files but the source versions should be included in the project, as we recreate them every deploy.
