import React from 'react';

const Roadmap = () => {
  return (
  <div class="timeline">
  <div class="container left" data-aos="fade-up">
    <div class="content">
      <h2>Algebra 1</h2>
      <p>Algebra 1 is typically the first course in high school math and covers fundamental concepts such as solving equations, graphing linear functions, and manipulating polynomials.</p>
    </div>
  </div>
  <div class="container right" data-aos="fade-up"  data-aos-delay="200">
    <div class="content">
      <h2>Geometry</h2>
      <p>Geometry deals with the study of points, lines, angles, shapes, and their properties. Students learn about the principles of Euclidean geometry, including constructions, proofs, and transformations.</p>
    </div>
  </div>
  <div class="container left" data-aos="fade-up"  data-aos-offset="500"
     data-aos-duration="500">
    <div class="content">
      <h2>Algebra 2/Trigonometry</h2>
      <p>Algebra 2/Trigonometry is a continuation of Algebra 1 that incorporates trigonometric functions, complex numbers, logarithms, and exponentials. It prepares students for higher-level math courses such as Pre-Calculus and Calculus.</p>
    </div>
  </div>
  <div class="container right" data-aos="fade-up" data-aos-offset="400"
     data-aos-duration="400">
    <div class="content">
      <h2>Pre-Calculus</h2>
      <p>Pre-Calculus is a course that provides students with a thorough understanding of advanced mathematical concepts such as functions, conic sections, vectors, and trigonometry. It is designed to prepare students for Calculus and other higher-level math courses.</p>
    </div>
  </div>
  <div class="container left" data-aos="fade-up">
    <div class="content">
      <h2>Calculus</h2>
      <p>Calculus is a branch of mathematics that deals with the study of rates of change and accumulation. It involves differential calculus, which deals with instantaneous rates of change, and integral calculus, which deals with the accumulation of quantities. Calculus is used in various fields, such as physics, engineering, economics, and computer science, among others.</p>
    </div>
  </div>
  <div class="container right" data-aos="fade-up">
    <div class="content">
      <h2>Linear Algebra</h2>
      <p>Linear Algebra is the study of vectors, matrices, and linear transformations. It involves understanding the properties and operations of these mathematical objects and how they can be used to solve problems in various fields, such as physics, engineering, computer science, and economics. </p>
    </div>
  </div>

  <div class="container left"data-aos="fade-up">
    <div class="content">
      <h2>Discrete Mathematics</h2>
      <p>Discrete Mathematics is a branch of mathematics that deals with discrete structures and their properties. It includes topics such as logic, set theory, graph theory, combinatorics, and algorithms. Discrete mathematics is used extensively in computer science, cryptography, and other fields that involve the manipulation of discrete objects.</p>
    </div>
  </div>
</div>
  );
}
export default Roadmap;