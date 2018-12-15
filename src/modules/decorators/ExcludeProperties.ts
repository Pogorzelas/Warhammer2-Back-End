function exclude(objectToExcludeFrom, properties) {
  for (const propertyName of properties) {
    if (objectToExcludeFrom) {
      delete objectToExcludeFrom[propertyName];
    }
  }
}

function excludeProperties(properties) {
  return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value; // save a reference to the original method
    descriptor.value = async function (...args: any[]) {
      const originalResult = await originalMethod.apply(this, args);
      if (originalResult instanceof Array) {
        originalResult.forEach((result) => {
          if (typeof result === 'object') {
            exclude(result, properties);
          }
        });
      } else if (typeof originalResult === 'object') {
        exclude(originalResult, properties);
      }
      return originalResult;
    };
    return descriptor;
  };
}

export default excludeProperties;