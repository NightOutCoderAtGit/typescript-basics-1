# TypeScript Basics
>tsc abc.ts
>Note - js file get created
>node abc.js

# Cammands
Do not generate .js file if there is a compilation error
>tsc --noEmitOnError abc.ts

To Generate template for tsconfig.json
>tsc --init

To delete created .js files {Make sure tsconfig is present in that dir}
>tsc --build --clean

To run multiple ts files in one shot: {Make sure tsconfig is present in that dir}
>tsc


# In case of Security Error
Run Visual Studio Code as Administrator
In the Terminal Window of Visual Studio Code, run Set-ExecutionPolicy RemoteSigned on PowerShell.
