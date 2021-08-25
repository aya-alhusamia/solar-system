import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Credit from './Credit'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from './CardUtils'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const Index = () => (
    <Styles>
        <Form
            onSubmit={onSubmit}
            render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
                active
            }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Credit
                            number={values.number || ''}
                            name={values.name || ''}
                            expiry={values.expiry || ''}
                            cvc={values.cvc || ''}
                            focused={active}
                        />
                        <div>
                            <Field
                                name="number"
                                component="input"
                                type="text"
                                pattern="[\d| ]{16,22}"
                                placeholder="Card Number"
                                format={formatCreditCardNumber}
                            />
                        </div>
                        <div>
                            <Field
                                name="expiry"
                                component="input"
                                type="text"
                                pattern="\d\d/\d\d"
                                placeholder="Valid Thru"
                                format={formatExpirationDate}
                            />
                            <Field
                                name="cvc"
                                component="input"
                                type="text"
                                pattern="\d{3,4}"
                                placeholder="CVC"
                                format={formatCVC}
                            />
                        </div>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )
            }}
        />
    </Styles>
)
export default Index