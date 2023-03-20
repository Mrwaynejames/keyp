import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditAmountById, UpdateAmountInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormAmount = NonNullable<EditAmountById['amount']>

interface AmountFormProps {
  amount?: EditAmountById['amount']
  onSave: (data: UpdateAmountInput, id?: FormAmount['id']) => void
  error: RWGqlError
  loading: boolean
}

const AmountForm = (props: AmountFormProps) => {
  const onSubmit = (data: FormAmount) => {
  
    
    
  
    
    
  
    props.onSave(data, props?.amount?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAmount> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="user"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User
        </Label>
        
          <TextField
            name="user"
            defaultValue={props.amount?.user}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="user" className="rw-field-error" />

        <Label
          name="balance"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Balance
        </Label>
        
          <TextField
            name="balance"
            defaultValue={props.amount?.balance}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="balance" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AmountForm
