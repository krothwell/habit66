const canInputBeSubmitted = function(touched, errorStr) {
  return touched && errorStr.length === 0;
}

export {canInputBeSubmitted};

const handleInputBlur = function(blurState) {
  this.setState({
    [blurState]: true
  });
}

export {handleInputBlur};
