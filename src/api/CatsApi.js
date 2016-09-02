

// fetch("/login", {
//   method: "POST",
//   body: form
// })

class CatsApi {
  static getAllCats() {
    return fetch('http://localhost:5000/api/v1/cats').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateCat(cat) {
    const request = new Request(`http://localhost:5000/api/v1/cats/${cat.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createCat(cat) {
    const request = new Request('http://localhost:5000/api/v1/cats/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  // static saveCourse(course) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minCourseTitleLength = 1;
  //       if (course.title.length < minCourseTitleLength) {
  //         reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //       }

  //       if (course.id) {
  //         const existingCourseIndex = courses.findIndex(a => a.id == course.id);
  //         courses.splice(existingCourseIndex, 1, course);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids and watchHref's for new courses in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         course.id = generateId(course);
  //         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //         courses.push(course);
  //       }

  //       resolve(Object.assign({}, course));
  //     }, delay);
  //   });
  // }

  // static deleteCourse(courseId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfCourseToDelete = courses.findIndex(course => {
  //         course.courseId == courseId;
  //       });
  //       courses.splice(indexOfCourseToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default CatsApi;
