// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';
import count from './count.js';
import {gsap} from "gsap";

console.log('Hello, world!');

let data = count(5, 5);

console.log(data);