const firstTestObject = {
  /* methods  available */
  methods: {
    // Convert input string into array, reverse it then join it back to build a string
    ReverseString: (original) => original.split('').reverse().join(''),
  },
  /* data available */
  data: { inputReverseString: 'Hello' },
};

module.exports = firstTestObject;
