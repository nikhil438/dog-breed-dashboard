import { faPen, faPlusSquare, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { isEmpty } from '../utils/Validation'

const Table = props => {

    const [mode, setMode] = useState('')
    const [editIndex, setEditIndex] = useState(-1)

    return <div className="App-header">
        <table className='full-width'>
            <thead>
                <tr>
                    {props.headers && props.headers.map(each => {
                        return <th key={each.label || ''}>{each.label || ''}</th>
                    })}
                    {props.add && <th><FontAwesomeIcon icon={faPlusSquare} color='grey' size="lg" onClick={() => { setMode('add') }} /></th>}
                </tr>
            </thead>
            <tbody>
                {props.add && mode === 'add' && <NewRow elems={props.headers} cancel={() => { setMode('') }} save={props.handleSave} />}
                {props.rows && props.rows.map((eachRow, i) => {
                    return (
                        i !== editIndex ? <tr key={i} onClick={e => { props.onRowClick && props.onRowClick({ obj: eachRow, index: i }) }}>
                            {props.headers && props.headers.map(eachHeader => {
                                return eachHeader.id ? <td style={{ ...eachHeader.cssStyle }}>{eachRow[eachHeader.id] || eachHeader.defaultVal}</td> : <td style={{ ...eachHeader.cssStyle }}>{eachHeader.action(eachRow)}</td>
                            })}
                            {props.add && <td><FontAwesomeIcon icon={faPen} color='grey' onClick={() => { setMode('edit'); setEditIndex(i) }} /></td>}
                        </tr>
                            :
                            <NewRow elems={props.headers} form={eachRow} cancel={() => { setMode('') }} save={form => { setMode(''); setEditIndex(-1); props.handleSave(form) }} />
                    )
                })}
            </tbody>
        </table>
    </div>;
}

const NewRow = props => {

    const [form, setForm] = useState(props.form || {})
    const [error, setError] = useState({})

    const handleInputChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (isEmpty(e.target.value)) {
            error[e.target.name] = 'This field is required'
        } else {
            delete error[e.target.name]
        }
        setError(error)
    }

    const getElement = config => {
        if (config.type === 'select') {
            return (
                <div>
                    <div>
                        <select className='Input full-width' name={config.id} type={config.type} value={form[config.id] || ''} onChange={handleInputChange}>
                            <option value='0'>Please Select</option>
                            {config.options && config.options.map(each => <option value={each}>{each}</option>)}
                        </select>
                        <div className='clr-red'>{error[config.id] || '           '}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <input type={config.type} className='Input full-width' name={config.id} type={config.type} value={form[config.id] || ''} onChange={handleInputChange} />
                        <div className='clr-red'>{error[config.id] || '           '}</div>
                    </div>
                </div>
            )
        }
    }

    const handleSubmit = () => {
        props.cancel()
        props.save(form)
        setForm({})
        setError({})
    }

    const handleCancel = () => {
        props.cancel()
        setForm({})
        setError({})
    }

    return (<tr>
        {props.elems && props.elems.map(each => (<td key={'column-' + each.id}>{getElement(each)}</td>))}
        <td>
            <FontAwesomeIcon icon={faCheck} className='pad-r-15' size='1x' color='green' onClick={handleSubmit} />
            <FontAwesomeIcon icon={faTimes} size='1x' color='red' onClick={handleCancel} />
        </td>
    </tr>)
}

export default Table;