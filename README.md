<h2 align="center">Great Efue Date Wizard</h2>

<p align="center">A Package which transform date to a friendly sentence etc.</p>

<p align="center">
    <a href="https://www.npmjs.com/package/greatefue-datewizard"><img src="https://img.shields.io/npm/v/greatefue-datewizard.svg?style=flat-square" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/package/greatefue-datewizard"><img src="https://img.shields.io/npm/dm/greatefue-datewizard.svg?style=flat-square" alt="NPM Downloads" /></a>
    <img src="https://github.com/greatefue/greatefue-datewizard/workflows/CI/badge.svg" alt="CI" />
    <a href="https://github.com/greatefue/greatefue-datewizard/tree/1.0.4"></a>
    <a href="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-datewizard.svg?type=shield"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-datewizard.svg?type=shield"/></a>
</p>


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Optional Parameter Table](#optional-parameter-table)
4. [Releases](./HISTORY.md)
4. [Author](#author)
6. [License](#license)
7. [Team](#team)
<!-- 13. [Technology Sponsors](#technology-sponsors) -->

## <a name="installation"></a>Installation

```bash
$ yarn add greatefue-datewizard
$ npm i greatefue-datewizard
```

## <a name="usage"></a>Usage

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

## <a name="optional-parameter-table"></a>Optional Parameter Table

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



## <a name="author"></a>Author

**Great Efue**

* [GitHub Profile](https://github.com/greatefue)
* [Twitter Profile](https://twitter.com/achillesefue)
* [LinkedIn Profile](https://linkedin.com/in/greatefue)


Please consider supporting me on Patreon.
<a href="https://www.patreon.com/bePatron?u=53060354" data-patreon-widget-type="become-patron-button">Become a Patron of Great Efue!</a>


## <a name="license"></a>License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-datewizard.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fgreatefue%2Fgreatefue-datewizard?ref=badge_large)


## <a name="team"></a>Team

These are folks that keep the project moving and are resources for help.

### Technical Steering Committee (TSC)

The people who manage releases, review feature requests, and meet regularly to ensure GreatEfue-DateWizard is properly maintained.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/greatefue">
<img src="https://github.com/greatefue.png?s=75" width="75" height="75"><br />
Great Efue
</a>
</td><td align="center" valign="top" width="11%">
<a href="https://github.com/d-sonofman">
<img src="https://github.com/d-sonofman.png?s=75" width="75" height="75"><br />
Temitope Afolabi
</a>
</td></tr></tbody></table>


### Reviewers

The people who review and implement new features.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/greatefue">
<img src="https://github.com/greatefue.png?s=75" width="75" height="75"><br />
Great Efue
</a>
</td></tr></tbody></table>

### Committers

The people who review and fix bugs and help triage issues.

<table><tbody><tr><td align="center" valign="top" width="11%">
<a href="https://github.com/greatefue">
<img src="https://github.com/greatefue.png?s=75" width="75" height="75"><br />
Great Efue
</a>
</td></tr></tbody></table>



<!-- ## <a name="technology-sponsors"></a>Technology Sponsors

The following companies, organizations, and individuals support GreatEfue-DateWizard ongoing maintenance and development. [Become a Sponsor](https://opencollective.com/greatefue-datewizard) to get your logo on our README and website. -->

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->
<!-- <h3>Platinum Sponsors</h3>
<p><a href="https://solutions.efuelite.com"><img src="https://solutions.efuelite.com/assets/img/EfueliteSolutions_Logo.png" alt="Efuelite Solutions" width="75" height="75"></a></p> -->

<!--sponsorsend-->
