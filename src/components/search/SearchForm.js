import { useRef, useEffect, useState } from 'react';

import { InputGroup, Form, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { changeKeyword } from '../../modules/search';

const CustomForm = styled(Form)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const CustomInputGroup = styled(InputGroup)`
  margin: 0;
  max-width: 800px;
`;

function SearchForm() {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();

  const onChange = event => {
    setKeyword(event.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();

    if (!keyword) {
      return alert('공백은 입력될 수 없습니다.');
    }

    dispatch(changeKeyword(keyword))
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <CustomForm onSubmit={ onSubmit }>
      <CustomInputGroup size="lg">
        <Form.Control
          ref={ inputRef }
          value={ keyword }
          onChange={ onChange }
          placeholder='검색어를 입력하세요.'
        />
        <Button type="submit">
          <FontAwesomeIcon icon={ faMagnifyingGlass } />
        </Button>
      </CustomInputGroup>
    </CustomForm>
  );
}

export default SearchForm;