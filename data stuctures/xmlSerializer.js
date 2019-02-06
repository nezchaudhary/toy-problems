/*

XML Serializer

Create a data structure to model a simple HTML/XML document. You don't need to
handle comments, doctypes etc, but your code should be able to represent 
standard stuff like the following without restricting to these tags

Don't worry about anything other than the basic structure, you don't need to
spell out every accessor or constructor

Then write a function to convert from your model into XML. (That is, serialize
your model to text. Do not parse text/XML into a model

*/

class Element {
  constructor(tag, attributes, children, selfClosing, data) {
    this.tag = tag;
    this.attributes = {};
    this.children = [];
    this.selfClosing = selfClosing;
    this.data = '';
  }
}


let element = new Element(
  'div', 
  [{classes:['a', 'b'], id: 'bc', }], 
  [/* ELEMENTS INSTANCES */],
  true, 
  ''
);



let xml = {
  root: {
    /* ELEMENT */
  },
  [element]: [
    {
      attributes: {
        classes: [],
        id: '',
        /* ... any other attributes */
      },
      data: '',
      children: [],
     }
  ]   
};

const addAttributes = (attributes) => {
  let result = '';
  //append attributes to string
  return result;
};


const parseElement = (element) => {
  let str = `<${element.tag}`;
  let attributes = [];
  let data = '';
  let children = [];
  let closingTag = element.selfClosing ? '/>' : `<${element.tag}>`

  for (let content in element) {
    if (content === 'attributes') {
      attributes = addAttributes(element[content]);
    } else if (content === 'data') {
      data = element[content];   
    } else if (content === 'children') {
      element.children.forEach(el => {
       children.push(parseElement(el));
      });
    }
  }
  return `${str} ${attributes.join(' ')}>${data}${closingTag}`;
};

const buildXML = (xmlData) => {
  //data should have a root.
  let root = xmlData.root;
  return parseElement(root);
};