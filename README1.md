# Golden Layout Manager

**- Description about POC:**
Golden Layout allows us to design page with different Layouts.
It provides different layout components using which we can divide our page into different sections.
There are three components provided by Golden Layout.They are:
1.Row
2.Column
3.Stack.
Layout components mentioned above are rendered into DOM container, which is nothing but our React-DOM container.
We can add different menu-items to the Layout components.
These menu-items can be any React components. eg Class component or Functional Component. 
Once we add the menu-items to the layout components we can register the components using registerComponent() method of GoldenLayout.
This is how Golden Layout Manager helps us to design page with different layouts.



## Contributors

- Name : Pooja Kumbharkar.
- Duration : 3 weeks
- Position : Frontend Developer-Intern

## What is Golden Layout:

GoldenLayout is Layout Manager which allows us to design page using different layout components like
Rows,Columns,and Stack. In Row component we can see our page divided into different sections row wise.Similarly Column component divides the page into multiple Columns. Stack allows us to add components on the top of other component.

## How to run:

- Firstly, add the dependencies given below in the script tag in index.html file.
1. "//code.jquery.com/jquery-1.11.1.min.js"
2."//golden-layout.com/files/latest/js/goldenlayout.min.js"
3."//golden-layout.com/files/latest/css/goldenlayout-base.css"

- Secondly, we can create different layout components which is written in json form. Golden Layout Manager then converts this json object into tree object making the topmost item from layout as root of tree and the rest items as child of the tree.

- Thirdly, we can register these components using registerComponent() method of GoldenLayout which takes name of the components and constructor or function which in turn allows us to set state of the layout components.

- Finally we can start our React app using npm start and execute the code.



## What is achieved as part of this POC ?
From this POC I learned how to design page using different layout components. How we can make page more attractive and effective by adding components to the page dynamically. We can also add different contents to the different components of layout making it more informative and effective.
We can allow user to drag and drop layout components anywhere in the DOM container making it more user-friendly.

## What is possible and What is not:
**Things possible using GoldenLayout:**
1.We can add components dynamically.
2.We can allow user to drag and drop components anywhere in the DOM container.
3.We can also set static components to the DOM container.
4.We can add any React-Component to the componentState of layout component.
5.We can design page using combination of multiple layout components.

**Things not possible using GoldenLayout**
1. We cannot re-add the static component once we removed or closed it from the DOM container.
2. We cannot change the state of the components manually once we set it.

## Documentation URL
http://golden-layout.com/docs/
http://golden-layout.com/tutorials/
