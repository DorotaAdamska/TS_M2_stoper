import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {

  protected results : string[]= []

  constructor(element: HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  protected prepareElements(element: HTMLDivElement) {
    this.dom.resultsList = element.querySelector('.stopwatch__results__list') as HTMLDivElement;
    this.dom.addToListBtn = element.querySelector('.stopwatch__add-to-list-btn') as HTMLButtonElement;
    this.dom.resetListBtn = element.querySelector('.stopwatch__reset-list-btn') as HTMLButtonElement;
  }

  protected prepareActions(): void {
    /*
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */
    if (this.dom.addToListBtn) {
      this.dom.addToListBtn.addEventListener('click', () => { this.addToList() });
    }
    if (this.dom.resetListBtn) {
      this.dom.resetListBtn.addEventListener('click', () => { this.resetList() });
    }
  }

  protected renderList(): void {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */
    this.dom.resultsList.innerHTML = "";

    if (this.results) {
      this.results.forEach((result: string) => this.dom.resultsList.innerHTML += `<li>${result}</li>`);
    }
  }

  protected addToList(): void {
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
    this.results.push(this.dom.currentTime.innerHTML);
    this.renderList()
    console.log(this.results)
  }

  protected resetList(): void {
    /*
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
    this.results = [];
    this.dom.resultsList.innerHTML = "";
  }

}

export default StopwatchWithResults