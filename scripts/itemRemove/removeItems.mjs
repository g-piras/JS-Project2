//BONUS 2
export const printRemove = (className, element, placeholder) => {
  let tdStatus = element.querySelector(
    `.${className} tbody tr td:nth-child(3)`
  );
  tdStatus.classList.toggle("removed");
  if (tdStatus.textContent !== "Removed") {
    placeholder = tdStatus.textContent;
    tdStatus.textContent = "Removed";
  } else {
    tdStatus.textContent = placeholder;
  }
  return placeholder;
};

export const hideItem = (className, idItem, index, runWeeks) => {
  for (let i = index + 1; i < runWeeks; i++) {
    let tdTable = document.querySelectorAll(
      `#${className}-${i} tbody tr td:nth-child(1)`
    );
    tdTable.forEach((element) => {
      if (element.textContent === idItem) {
        element.parentElement.classList.toggle("hidden");
      }
    });
  }
};
