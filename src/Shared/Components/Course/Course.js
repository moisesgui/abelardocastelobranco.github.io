import React from "react";
import "./Couse.style.css";

const Course = () => {
  return (
    <section class="course">
      <h1>Courses we Offer</h1>
      <p class="course-title">
        We have the most varied and most sought after courses for your
        graduation.
      </p>
      <div class="row" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div class="course-col">
          <h3>Intermediate</h3>
          <p class="course-description">
            the various courses in the intermediate area are available on our
            online platforms
          </p>
        </div>
        <div class="course-col" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3>Degree</h3>
          <p class="course-description">
            the various courses in the Degree area are available on our online
            platforms
          </p>
        </div>
        <div class="course-col" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3>Post Graduation</h3>
          <p class="course-description">
            the various courses in the Post Graduation area are available on our
            online platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Course;
