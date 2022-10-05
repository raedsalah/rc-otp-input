import React, { useContext } from 'react'
import { DemoContext } from '..'

function Sidepanel() {
    const { states, setProperties } = useContext(DemoContext)

    return (
        <div className="sidepanel">
            <div className="header">
                <a href="https://www.npmjs.com/package/rc-otp-input">rc-otp-input</a>
            </div>
            <div className="item">
                <label>Number of fields</label>
                <input type="number" min="2" max="12" value={states.numOfFields} onChange={e => setProperties({ ...states, numOfFields: Number(e.target.value) })} />
            </div>
            <div className="item">
                <label>Default value</label>
                <input type="text" value={states.defaultValue} onChange={e => setProperties({ ...states, defaultValue: e.target.value })} />
            </div>
            <div className="item">
                <label>Placeholder</label>
                <input type="text" value={states.placeholder} onChange={e => setProperties({ ...states, placeholder: e.target.value })} />
            </div>
            <div className="item">
                <label>separator</label>
                <input type="text" value={states.separator} onChange={e => setProperties({ ...states, separator: e.target.value })} />
            </div>
            <div className="item">
                <label>Invalid</label>
                <input type="checkbox" onChange={e => setProperties({ ...states, invalid: e.target.checked })} />
            </div>
            <div className="item">
                <label>Error message</label>
                <input type="text" value={states.errorMessage} onChange={e => setProperties({ ...states, errorMessage: e.target.value })} />
            </div>
            <div className="item">
                <label>Secure</label>
                <input type="checkbox" onChange={e => setProperties({ ...states, secure: e.target.checked })} />
            </div>
        </div>
    )
}

export default Sidepanel