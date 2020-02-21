import { from } from 'rxjs';
const fetch = require('node-fetch');

import { sequentially } from '../../src/combine/sequentially';

sequentially(
    () => from(fetch('https://restcountries.eu/rest/v2/all').then((res: Response) => res.json())),
    (countries: any) => from(fetch(`https://restcountries.eu/rest/v2/name/${countries[0].name}?fullText=true`).then((res: Response) => res.json())),
    (country: any) => from(fetch(`https://restcountries.eu/rest/v2/alpha/${country[0].borders[1]}`).then((res: Response) => res.json()))
).subscribe(console.log);