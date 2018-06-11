/**
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

const decodeString = s => {
  let k = 0;

  const decode = str => {
    let retStr = '';

    while (k < str.length && str[k] !== ']') {
      if (isNaN(str[k])) {
        retStr += str[k];
        k++;
      } else {
        let num = 0, currentStr = '';

        while (!isNaN(str[k]) && k < str.length) {
          num = num * 10 + parseInt(str[k]);
          k++;
        }

        k++;
        currentStr = decode(str);
        k++;

        while (num > 0) {
          retStr += currentStr;
          num--;
        }
      }
    }

    return retStr;
  };

  return decode(s);
};