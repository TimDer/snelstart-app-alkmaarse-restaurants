# Precompiled
All precompiled versions of 'Alkmaarse restaurants' can be found in github releases.

# required software

* [Node.js](https://nodejs.org) (Required)
* [DOTNET sdk version 5](https://dot.net) (Required)
* [Visual Studio](https://visualstudio.microsoft.com/) (Optional)

Tip: If you are installing Visual Studio 2022 make sure to also select dotnet 5

# development

## In Visual Studio
Open `AlkmaarseRestaurants.sln` with Visual Studio and get started developing

## Without Visual Studio
If you are not using Visual Studio you can get away with just using the required software.

With the following command you can get started:
```
$ dotnet watch run
```

# Compilation (how to build)

## With the DOTNET cli
In order to compile make sure that you installed the required software. after that is done. you can run the folloing command to compile it:
```
$ dotnet publish --self-contained --runtime=win-x64
```
the `--self-contained` and `--runtime=win-x64` are optional but wil allow you to run the executable on any pc (running windows) without installing the dotnet runtime, Making it framework independent.

## In Visual Studio
In Visual Studio you just need to create a publish profile and than click publish. [For more information check out the microsoft docs](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/visual-studio-publish-profiles?view=aspnetcore-6.0)