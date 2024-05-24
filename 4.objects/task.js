function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
};

new Student("Олег", "мужской", 20);
new Student("Петр", "мужской", 19);
new Student("Ольга", "женский", 18);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function(...marks) {
	if (this.marks) {
		this.marks.push(...marks);
	}
};

Student.prototype.getAverage = function() {
	if (!(this.marks && this.marks.length >= 1)) {
		return 0;
	} else {
		return this.marks.reduce((acc, item, index, marks) => {
			acc += item;
			if (index === marks.length - 1) {
				return acc / marks.length;
			}
			return acc;
		}, 0)
	}
};

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
};