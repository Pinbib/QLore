# QLore

<img src="./QLore.png" width="500px" heigth="500px">

### Qlore is a tool for testing servers using simple and short scripts.

# Installation

Go to [QLore](https://pinbib.github.io/.qlore/) and select the file for your operating system. After installation, you
need to move the file to the directory for Windows - C:/Windows/System32, and for MacOs and Linux - /usr/bin.

To move the file to /usr/bin, run the following commands:

``` bash
sudo cp QLore /usr/bin/

sudo chmod +x /usr/bin/QLore
```

If after executing the command `qlore version` you receive a text like <span style="color: green;">
QLore: [version]</span> then everything was successful.

## VS code

If you use VSCode, then you can install highlighting and a snippet for more convenient use of QLore, to do this, go to
the [QLore](https://pinbib.github.io/QLore/) website and click on the "VSCode" button, after which it will start
installation of a .zip archive containing the necessary
extensions ([how to install an extension from a .vsix file can be found here](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix) )
.

# Syntax

The code to run the script must be written in the `.ql` file

For tests, run the server using the express example
of [this](https://github.com/Pinbib/QLore/blob/main/test/server.js) (install express before starting). This is a server
startup script on localhost:3000, which will generate an error response when you change the login parameters.

## Create a request

There are seven request types in total (`POST`, `GET`, `PUT`, `PATCH`, `HEAD`, `DELETE`, `OPTIONS`).

This is how the request is viewed in code:

<pre>
<span style="color: blueviolet">[REQUEST]</span> [url] 
</pre>

`REQUEST` - this type of request (upper case)

`url` - is where the request will be sent (be sure to start with http:// or https://)

## Request parameters

To add a parameter to a request, you must first create it (as shown above), then you need to add code in the same way:

<pre>
<span style="color: rgb(90, 90, 255)">? </span>[parameter_name] [= or ::] [value]
</pre>

`parameter_name` - is the parameter name without spaces

followed by `=` or `::`

`value` - this value will be entered into the parameter

This is what the complete code should look like:

<pre>
<span style="color: blueviolet">GET</span> http://localhost:3000
<span style="color: rgb(90, 90, 255)">? </span>login = true
</pre>

## Creating variables

Variables are created using the `$` command:

<pre>
<span style="color: rgb(90, 90, 255)">$ </span>[var_name] [= or ::] [value]
</pre>

`var_name` - is the variable name without spaces

followed by `=` or `::`

`value` - this value will be entered into the variable

Variables can be accessed from anywhere using the `@` symbol:

<pre>
<span style="color: rgb(90, 90, 255)">$ </span>login = true
<span style="color: blueviolet">GET</span> http://localhost:3000
<span style="color: rgb(90, 90, 255)">? </span>login = <span style="color: rgb(127, 255, 105);">@login</span>
</pre>

## Import module

Modules are used to increase the speed of writing large objects. 
Modules are `.js` files with CommonJS syntax. In which the function is exported
with the main parameter `line: String[]`

<pre>
<span style="color: yellow;"># </span> [module_name] [path/to/file.js]
</pre>

`module_name` - is a module name

`path/to/file.js` - is a path to the module file

## = or ::

`=` - used to set a simple value

`::` - to set the value from the module

<pre>
[<span style="color: rgb(90, 90, 255)">$ </span>or <span style="color: rgb(90, 90, 255)">?</span>] :: [module_name] [arguments separated by space]
</pre>

`module_name` - is a module name

`arguments separated by space` - are the arguments that will be passed to the module

## Output to the console

Output to the console is via the `!` command:

<pre>
<span style="color: rgb(90, 90, 255)">! </span>[parameters] [value]
</pre>

`value` - this value will be entered into the variable

`parameters` - these are parameters for text styling (`--red`, `--green`, `--yellow`)

## Dispatch

To send a request, you must first create it (as shown above), then select this code:

<pre>
<span style="color: blue"><<< [OPTIONS SEPARATED BY SPACE]</span>
</pre>

`PARAMETERS SEPARATED BY SPACE` - for parameters that can only be disabled by parameter, there are four (`ERROR`, `SUCCESS`,
`REQUEST`, `REQUEST_END`), and they must be impersonated in upper case, and if there are several of them, separated by a
space.

`ERROR` — Disable displaying request errors.

Example: <prev>
<span style="color: blue"><<< ERROR</span>
</pre>

`SUCCESS` - disable response information output

Example: <prev>
<span style="color: blue"><<< SUCCESS</span>
</pre>

`REQUEST` - disable the display of information about sending a request

Example: <prev>
<span style="color: blue"><<< REQUEST</span>
</pre>

`REQUEST_END` - disable displaying information about request completion

Example: <prev>
<span style="color: blue"><<< REQUEST_END</span>
</pre>

This is what a complete GET request will look like with error output disabled:

<pre>
<span style="color: blueviolet">GET</span> http://localhost:3000
<span style="color: rgb(90, 90, 255)">? </span>login = true
<span style="color: blue"><<< ERROR</span>
</pre>

## Running the script

To run the script, you need to open a terminal and configure:

``` bash
qlore run path/to/file.ql
```

If you did what was given above, then you should have received something similar to this:

<pre>
<span style="color: green;">
Sending a request to http://localhost:3000?login=true.
      Start: 23.9.2023:18:34
http://localhost:3000?login=true
      Status: 200
      Text: OK
      Method: GET
      Data: false
The request to http://localhost:3000?login=true is completed.
      End: 23.9.2023:18:34
</span>
</pre>

# P.S

This documentation was translated into English using Google Translator, most likely there will be a lot of errors
here. (And this text too :)