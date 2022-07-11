# otp-input-react

A fully customizable otp component.

## Features

- Invalid and disabled state
- Flexible input separators based on index
- Flexible focus styling state
- Numeric and alphanumeric support [@todo accept regex validation]
- Default values for maintaining form states

## Installation

```bash
npm install --save rc-otp-input
```

or if you are using yarn :

```bash
yarn add rc-otp-input
```

## Usage:

```javascript
import Otp from "rc-otp-input";

function App() {
  const [OTP, setOTP] = useState("");
  return (
    <>
      <Otp onChange={setOTP} autoFocus numOfFields={4} type="text" />
    </>
  );
}
```

### Custom separators

```javascript
const customSeparator = (
  <div style={{ marginLeft: "16px", marginRight: "16px" }}> - </div>
);

<OtpInput
  numOfFields="8"
  separator={[1, 3, 5]}
  customSeparator={customSeparator}
/>;
```

## API

| api             | type            | required | default     | value                                      | desciption                                                                   |
| --------------- | --------------- | -------- | ----------- | ------------------------------------------ | ---------------------------------------------------------------------------- |
| numOfFields     | number          | no       | 4           | Number between 2 and 12                    | Number of fields to be rendered                                              |
| type            | string          | no       | "text"      | "text" , "password"                        | Change input to password                                                     |
| autoFocus       | boolean         | no       | false       | false , true                               | Auto focuses input on page load.                                             |
| isNum           | boolean         | no       | false       | false , true                               | If true allows only numbers                                                  |
| onChange        | function        | no       | (value)=>{} | any executable function                    | returns the values keyed in by user on change                                |
| defaultValue    | string          | no       | -           | String length equivlant to the numOfFields | Takes a string value and spreads it to the number of rendered input          |
| separator       | array[number]   | -        | -           | An array of elements Index number          | Based on the input index will add a custom seperator after it (to the right) |
| customSeparator | React.ReactNode | -        | -           | An element                                 | could be an element or a string used to create a custom seperator            |

## Support

If you like this package please consider giving it a star.

### Contributing

Feel Free to contributing or feature request

1. Fork it ( https://github.com/raedsalah/rc-otp-input.git/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
   @todo - to add commit patterns
5. Create a new pull request.

## License

MIT © [Raed Salah](https://github.com/raedsalah)
