function flattenJson(input) {
    const result = {};

    function flatten(obj, prefix = '') {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                // Create a new key with the current prefix and current key
                const newKey = prefix + key;

                // If the current value is an array, iterate over it
                if (Array.isArray(obj[key])) {
                    // Limit array handling to the first 100 elements
                    for (let index = 0; index < Math.min(obj[key].length, 100); index++) {
                        result[newKey + '_' + index] = obj[key][index];
                    }
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    // If the value is an object, recurse with the new key
                    flatten(obj[key], newKey + '_');
                } else {
                    // Otherwise, set the flattened key-value in the result
                    result[newKey] = obj[key];
                }
            }
        }
    }

    flatten(input); // Start flattening with the input JSON
    return result; // Return the flattened result
}

// Example usage
const nestedJson = {
    "id": 12345,
    "name": "SampleObject",
    "details": {
        "created_at": "2024-08-15T12:34:56Z",
        "status": "active",
        "metadata": {
            "type": "example",
            "priority": "high",
            "tags": ["tag1", "tag2", "tag3"]
        }
    }
}

{

    
}




const flattenedJson = flattenJson(nestedJson);
console.log(flattenedJson);
