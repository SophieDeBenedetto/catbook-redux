import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import CheckBoxes from '../common/CheckBoxes';

const CatForm = ({cat, hobbies, onSave, onChange, saving}) => {
  return (
    <div>
      <form>
        <h1>edit cat</h1>
        <TextInput
          name="name"
          label="name"
          value={cat.name}
          onChange={onChange}/>

        <CheckBoxes collection={hobbies} handleChange={onChange} />

        <TextInput
          name="breed"
          label="Breed"
          value={cat.breed}
          onChange={onChange}/>

        <TextInput
          name="weight"
          label="weight"
          value={cat.weight}
          onChange={onChange}/>

        <TextInput
          name="temperament"
          label="temperament"
          value={'test'}
          onChange={onChange}/>

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave}/>
      </form>
    </div>
  );
};

CatForm.propTypes = {
  cat: React.PropTypes.object.isRequired,
  hobbies: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default CatForm;
