export const change = (subject)=>{
    if (subject == 'Chinese') {
        subject =  '國文'
    } else if (subject == 'English') {
        subject = '英文'
    } else if (subject.value == 'Math') {
        subject = '數學'
    } else if (subject.value == 'Social_Studies') {
        subject = '社會'
    } else if (subject.value == 'Science') {
        subject = '自然'
    }

    return subject;
}
  
  