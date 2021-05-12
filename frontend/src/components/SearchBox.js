import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} >
      <div class="advanced-search">
      <div class="input-group">
        <input type="text" placeholder="What do you need?" onChange={(e) => setKeyword(e.target.value)} />
        <button type="button"><i class="fa fa-search"></i></button>
      </div>
    </div>
    </Form>
  )
}

export default SearchBox
