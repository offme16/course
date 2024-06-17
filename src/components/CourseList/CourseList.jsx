import React, { useState } from 'react';
import styles from './CourseList.module.css';
import { Button } from '../MyButton/Button';
import ProgressBar from '../MyBar/ProgressBar';

const coursesData = [
    {
      title: 'Функциональное программирование на Python',
      description: 'Функциональное программирование представляет собой методику написания программного обеспечения, в центре внимания которой находятся функции.',
      progress: 70,
      status: true  // Пример статуса курса
    },
    {
      title: 'Python: анализ данных с Pandas',
      description: 'Изучение анализа данных с помощью библиотеки Pandas в Python.',
      progress: 0,
      status: false
    },
    {
      title: 'ООП: Объектно-ориентированное программирование на Python',
      description: 'Изучение основ объектно-ориентированного программирования на языке Python.',
      progress: 100,
      status: true
    },
    {
      title: 'Основы JavaScript',
      description: 'Изучение основ языка JavaScript для разработки веб-приложений.',
      progress: 0,
      status: false
    },
    {
      title: 'Продвинутый JavaScript',
      description: 'Глубокое изучение возможностей языка JavaScript, включая функциональное и объектно-ориентированное программирование.',
      progress: 0,
      status: false
    },
    {
      title: 'SQL для начинающих',
      description: 'Основы языка SQL и работы с реляционными базами данных.',
      progress: 0,
      status: false
    },
  ];

export const CourseList = () => {
  const [courses, setCourses] = useState(coursesData);

  const handleEnroll = (index) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = { ...updatedCourses[index], status: true };
    setCourses(updatedCourses);
  };

  return (
    <div className={styles.grid}>
      {courses.map((course, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.header}>
            <div>
              <h4 className={styles.title}>{course.title}</h4>
            </div>
          </div>
          <p className={styles.p}>{course.description}</p>
          <div className={styles.btns}>
            {course.status ? (
              <>
                <ProgressBar progress={course.progress} />
                <Button>Продолжить</Button>
              </>
            ) : (
              <Button onClick={() => handleEnroll(index)} className={styles.enrollButton}>
                Записаться
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

 