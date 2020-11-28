import { ICV } from "store/models/cvModel";

export const CANDIDATES: ICV[] = [
    {
      "id": 1,
      "fio": "Козлов Евгений Александрович",
      "label": "Прогер",
      "area": "Нет",
      "dateOfBirth": "1985-08-31T00:00:00",
      "internal": false,
      "status": "New",
      "source": "HH",
      "quality": 10,
      "type": null,
      "contacts": {
        "id": 3,
        "email": "kozlov@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "kozlov.fake",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 1,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 1,
          "name": "Русский",
          "level": "родной"
        },
        {
          "id": 2,
          "name": "???????",
          "level": "??????"
        },
      ],
      "publication": [
        {
          "id": 1,
          "name": "Python vs .Net",
          "publisher": "https://habr.com/",
          "releaseDate": "2020-05-05T00:00:00",
          "summary": "Описание сравнения  языков",
        }
      ],
      "skills": [
        "Python",
        "SQL",
        "PostgreSQL",
        "HTML",
        "CSS",
        "Django Framework",
        "SQLite",
        "Git",
      ]
    },
    {
      "id": 3,
      "fio": "Алабанов Максим Петрович",
      "label": "Python разработчик",
      "area": "Python разработчик",
      "dateOfBirth": "1990-07-25T00:00:00",
      "internal": true,
      "status": "New",
      "source": "ГазПромБанк",
      "quality": 15,
      "type": null,
      "contacts": {
        "id": 4,
        "email": "alabanov@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "alabanov@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 2,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 5,
          "name": "???????",
          "level": "??????"
        },
      ],
      "publication": [
        {
          "id": 2,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "Python",
        "SQL",
        "PostgreSQL",
        "HTML",
        "CSS",
        "Linux",
        "Django REST Framework"
      ]
    },
    {
      "id": 4,
      "fio": "Фигурин Андрей Викторович",
      "label": "Python разработчик",
      "area": "Python разработчик",
      "dateOfBirth": "1991-01-01T00:00:00",
      "internal": false,
      "status": "New",
      "source": "HH",
      "quality": 20,
      "type": null,
      "contacts": {
        "id": 5,
        "email": "figurin@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "figurin@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 3,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 8,
          "name": "???????",
          "level": "??????"
        },
      ],
      "publication": [
        {
          "id": 3,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "Python",
        "Linux",
        "HTML",
        "CSS",
        "Data Analysis",
        "???-?????????",
        "Jupyter Notebook",
        "SVN",
        "Data Analysis"
      ]
    },
    {
      "id": 5,
      "fio": "Максимова ирина Павловна",
      "label": "Python разработчик",
      "area": "Python разработчик",
      "dateOfBirth": "1986-02-05T00:00:00",
      "internal": false,
      "status": "New",
      "source": "LinkedIn",
      "quality": 25,
      "type": null,
      "contacts": {
        "id": 6,
        "email": "maksimova@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "maksimova@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 4,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 12,
          "name": "?????????",
          "level": "???????"
        }
      ],
      "publication": [
        {
          "id": 4,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "SVN",
        "SOLID",
        "PostgreSQL",
        "Django",
        "Docker",
        "SQLAlchemy",
        "Flask"
      ]
    },
    {
      "id": 7,
      "fio": "Бандитова Екатерина Васильевна",
      "label": "Python разработчик",
      "area": "Python разработчик",
      "dateOfBirth": "1992-12-12T00:00:00",
      "internal": true,
      "status": "New",
      "source": "ГазПромБанк",
      "quality": 30,
      "type": null,
      "contacts": {
        "id": 8,
        "email": "banditova@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "banditova@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 5,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        },
        {
          "id": 11,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 11,
          "name": "???????",
          "level": "??????"
        }
      ],
      "publication": [
        {
          "id": 5,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "Python",
        "Django Framework",
        "SQL",
        "JavaScript",
        "HTML",
        "CSS",
        "C++"
      ]
    },
    {
      "id": 9,
      "fio": "Внукрова Елена Юрьевна",
      "label": "Python разработчик",
      "area": "Python разработчик",
      "dateOfBirth": "1993-05-23T00:00:00",
      "internal": false,
      "status": "New",
      "source": "HH",
      "quality": 35,
      "type": null,
      "contacts": {
        "id": 9,
        "email": "vnukrova@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "vnukrova@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 6,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 13,
          "name": "????????",
          "level": "???????????"
        }
      ],
      "publication": [
        {
          "id": 6,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "Flask",
        "Python",
        "HTML",
        "Github",
        "CSS",
        "SQLite",
        "Django"
      ]
    },
    {
      "id": 11,
      "fio": "Павлова Екатерина Маьвеевна",
      "label": "Дизайнер",
      "area": "Дизайнер",
      "dateOfBirth": "1994-01-01T00:00:00",
      "internal": false,
      "status": "New",
      "source": "HH",
      "quality": 40,
      "type": null,
      "contacts": {
        "id": 10,
        "email": "pavlova@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "pavlova@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 7,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 14,
          "name": "???????",
          "level": "??????"
        }
      ],
      "publication": [
        {
          "id": 7,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "???-??????",
        "MS PowerPoint",
        "dobe Illustrator",
        "Adobe Photoshop",
        "Web-??????"
      ]
    },
    {
      "id": 12,
      "fio": "Александров Игорь Викторович",
      "label": "Дизайнер",
      "area": "Дизайнер",
      "dateOfBirth": "1995-08-14T00:00:00",
      "internal": false,
      "status": "New",
      "source": "LinkedIn",
      "quality": 55,
      "type": null,
      "contacts": {
        "id": 11,
        "email": "aleksandrov@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "aleksandrov@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 8,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 15,
          "name": "?????????",
          "level": "???????"
        }
      ],
      "publication": [
        {
          "id": 8,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "MS PowerPoint",
        "Adobe Acrobat",
        "Adobe Illustrator",
        "MS PowerPoint"
      ]
    },
    {
      "id": 13,
      "fio": "Озёрная Юлия Петрова",
      "label": "Дизайнер",
      "area": "Дизайнер",
      "dateOfBirth": "1995-08-31T00:00:00",
      "internal": true,
      "status": "New",
      "source": "ГазПромБанк",
      "quality": 65,
      "type": null,
      "contacts": {
        "id": 12,
        "email": "ozernaya@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "ozernaya@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [],
      "languages": [
        {
          "id": 16,
          "name": "????????",
          "level": "???????????"
        },
        {
          "id": 17,
          "name": "???????",
          "level": "??????"
        }
      ],
      "publication": [
        {
          "id": 9,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "???????????",
        "Web Design",
        "Adobe Photoshop",
        "SketchUp",
        "Abode",
        "V-Ray",
        "??????????? ??????"
      ]
    },
    {
      "id": 14,
      "fio": "Речной Александр Демидович",
      "label": "Дизайнер",
      "area": "Дизайнер",
      "dateOfBirth": "1978-01-25T00:00:00",
      "internal": false,
      "status": "New",
      "source": "HH",
      "quality": 75,
      "type": null,
      "contacts": {
        "id": 13,
        "email": "rechnoy@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "rechnoy@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 9,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 19,
          "name": "????????",
          "level": "???????????"
        }
      ],
      "publication": [
        {
          "id": 10,
          "name": "Python и Игры",
          "publisher": "Игровой журнал",
          "releaseDate": "2020-01-01T00:00:00",
          "summary": "Использования Python для написания игр",
        }
      ],
      "skills": [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "?????????? ??????????",
        "Adobe InDesign",
        "???????????? ??",
        "??????"
      ]
    },
    {
      "id": 15,
      "fio": "Фиксикова Мася Львовна",
      "label": "Дизайнер",
      "area": "Дизайнер",
      "dateOfBirth": "1989-12-13T00:00:00",
      "internal": true,
      "status": "New",
      "source": "ГазПромБанк",
      "quality": 80,
      "type": null,
      "contacts": {
        "id": 14,
        "email": "fixikova@fake.com",
        "phone": "+7931 00 00 000",
        "skype": "fixikova@fake.com",
        "site": "http://hakhak.ddns.net:8081/"
      },
      "education": [
        {
          "id": 10,
          "title": "???",
          "area": "????????????????",
          "degree": "????????",
          "startDate": "2015-01-01T00:00:00",
          "endDate": "2020-01-10T00:00:00"
        }
      ],
      "languages": [
        {
          "id": 18,
          "name": "?????????",
          "level": "???????"
        }
      ],
      "publication": [],
      "skills": []
    }
  ]