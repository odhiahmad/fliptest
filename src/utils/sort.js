const sort = (data, type) => {
  if (type == "asc") {
    return data.sort((a, b) => {
      var nameA = a.beneficiary_name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.beneficiary_name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else if (type == "desc") {
    return data.sort((a, b) => {
      var nameA = a.beneficiary_name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.beneficiary_name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else if (type == "created_at-desc") {
    return data.sort((a, b) => {
      var nameA = a.created_at.toUpperCase(); // ignore upper and lowercase
      var nameB = b.created_at.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else if (type == "created_at-asc") {
    return data.sort((a, b) => {
      var nameA = a.created_at.toUpperCase(); // ignore upper and lowercase
      var nameB = b.created_at.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else {
    return data;
  }
};

export { sort };
