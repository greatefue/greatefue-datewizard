<h2 align="center">Great Efue Date Wizard</h2>

<p align="center">A Package which transform date to a friendly sentence etc.</p>

<p align="center">
     <!-- <img src="https://github.com/greatefue/greatefue-datewizard/workflows/CI/badge.svg" alt="CI" />  -->
    <a href="https://www.npmjs.com/package/greatefue-datewizard"><img src="https://img.shields.io/npm/v/greatefue-datewizard.svg?style=flat-square" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/greatefue-datewizard"><img src="https://img.shields.io/npm/dm/greatefue-datewizard.svg?style=flat-square" alt="NPM Downloads" /></a>
    <a href="https://github.com/greatefue/greatefue-datewizard/tree/1.0.0"></a>
</p>



## Quick-start

### Installation

```bash
$ yarn add greatefue-datewizard
$ npm i greatefue-datewizard
```

### Usage

In your .ts or .js file, 


1. import the package

```ts
import { DaysAgo } from 'greatefue-datewizard';
```

2. Call the function

```ts
var i = DaysAgo("2021-01-01");
console.log(i) //2 months ago
```

3. Passing Optional Parameters
```ts
var i = DaysAgo("2021-01-01",{date:true});
console.log(i) //2 months ago
```

4. Passing a future date returns difference from the current date to the future date.
```ts
var i = DaysAgo("2099-12-31");
console.log(i) //78 years into the future
```

5. Optional Parameter table

|**Parameter** | **Datatype** | **Description**                                          | **Example**                                               | **Example Output**  |
| ------------ |:------------:| :------------------------------------------------------- | :-------------------------------------------------------- | :------------------ |
| date         | boolean      | Extract **year month day** from date or datetime         | ``` DaysAgo("2021-01-01T00:00:00",{date:true}); ```       | //2 months ago      |
| time         | boolean      | Extract **hour minute second** from date or datetime     | ``` DaysAgo("2021-01-01T00:00:00",{time:true}); ```       | //2 hours ago       |
| year         | boolean      | Extract **year** from date or datetime                   | ``` DaysAgo("2021-01-01T00:00:00",{year:true}); ```       | //2 years ago       |
| month        | boolean      | Extract **month** from date or datetime                  | ``` DaysAgo("2021-01-01T00:00:00",{month:true}); ```      | //2 months ago      |
| day          | boolean      | Extract **day** from date or datetime                    | ``` DaysAgo("2021-01-01T00:00:00",{day:true}); ```        | //2 days ago        |
| hour         | boolean      | Extract **hour** from datetime                           | ``` DaysAgo("2021-01-01T00:00:00",{hour:true}); ```       | //2 hours ago       |
| minute       | boolean      | Extract **minute** from datetime                         | ``` DaysAgo("2021-01-01T00:00:00",{minute:true}); ```     | //2 minutes ago     |
| second       | boolean      | Extract **second** from datetime                         | ``` DaysAgo("2021-01-01T00:00:30",{second:true}); ```     | //2 second ago      |


### Contributors

| **Contributor**                             | **Updates**   |  
| ------------------------------------------- | ------------- |  
| [greatefue](https://github.com/greatefue)   |  3            |
| [d-sonofman](https://github.com/d-sonofman) |  2            |

### Author

**Great Efue**

* [GitHub Profile](https://github.com/greatefue)
* [Twitter Profile](https://twitter.com/achillesefue)
* [LinkedIn Profile](https://linkedin.com/in/greatefue)


Please consider supporting me on Patreon.
<a href="https://www.patreon.com/bePatron?u=53060354" data-patreon-widget-type="become-patron-button">Become a Patron of Great Efue!</a>


### License

Copyright © 2021, [Great Efue](https://github.com/greatefue).

Released under the [MIT License](LICENSE).