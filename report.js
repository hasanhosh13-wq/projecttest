const withStatus = list => {
    const result = [];

    for (const student of list) {
        result.push({
            ...student,
            status: student.grade >= 56 ? "pass" : "fail"
        });
    }

    return result;
};

export default withStatus;