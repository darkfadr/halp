# halp
>Halp is css helper library for spacing of html elements

[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)


## Getting Started
* Bower
  * `$ bower install --save halp`
* Add to HTML
  * `<link rel="stylesheet" href="../path/to/halp/halp.min.css" />`
* Profit

## Usage

[type][direction][size]

```
* Type
  * m   ->  Margin
  * p   -> Padding
* Direction
  * a   -> all
  * t   -> top
  * r   -> right
  * b   -> bottom
  * l   -> left
* Size 
  * n   -> 0
  * xs  -> extra small
  * s   -> small
  * m   -> medium
  * l   -> large
  * xl  -> extra large
```

`mtl  => margin top large`
`pm   => padding all medium`


### Examples

`<div class="col-sm-12 mtl pm"></div>`

## Development
```
  $ npm install
  $ gulp
```


