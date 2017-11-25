# angular-nested-list
This project is built using Angular 4. It serves as an example of recursion, in angular components. 
It features a nested list interface which is recursively (read: dynamically) built based on the *recursive list data* that has been passed to the list component. Sample data model for a list item is as follows
```
class ListDataItem  {
  id: string;
  caption: string;
  isSelected: boolean;
  subItems: ListDataItem[];
}

```
The `listDataItem` component, denoting a row of the list, is re-used (recursively) to generate the nested list with its children items, GrandChildren Items etc as required. (depending on the depth of the recursive list data). `<app-list-item>` is the component which has been used recursively. Pay attention to how the data has been passed to the nested component in the HTML using Angular's component arguments. Hopefully this serves as a sample for understanding nesting of components using Angular.

##### Extra features:
1. **Live Search:** allows searching of the list-data. (currently only for the top-most level of nesting)
2. **Selected item count:** The counter at the bottom of the page keeps a count of the number of list-items that have been checked. (currently only for the top-most level of nesting)
3. The selected items can then be **exported** as a filtered list.

## Pre-requisites
Since this is an Angular project, you need to have **node** and **AngularCli** (or likewise to allow angular commands)
#### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21
Example,
#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---
### AngularCli
Required to run this project (allows use of `ng`). You should be able to run the following command after the installation procedure
below.

    $ ng -v
    
#### AngularCLI installation on Windows

After installing npm, install AngularCLI 
  `npm install -g @angular/cli`
## Getting Started
After cloning the repository, use the build.bat file to initialize the project. (Once you've successfully installed node.js and angularCli).
+ Runs `npm install` in `repo\client` folder.
+ Downloads all npm modules mentioned in package.json.
+ finally serves the project on localhost using `ng serve`

Alternatively,
### Deployment
1. Clone the repository.
2. `cd` into the client folder.
3. Use `ng serve` to deploy project. (Angular with VS code default is `localhost:4200`)
## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature (Your feature deserves a description!)
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D
## Built using
[Angular](https://angular.io/)
[Bootstrap](https://v4-alpha.getbootstrap.com/)
HTML/CSS
