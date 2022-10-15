const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

let lawan, pilihanAnda, pilihanLawan;
let totalAnda = 0
let totalLawan = 0

function rand(pilihanAnda) {
    document.getElementById("anda").classList.add("d-none");
    document.getElementById("lawan").classList.add("d-none");

    let randNumb = Math.random();
    function input(pilihanAnda, randNumb) {
        if (randNumb <= 0.33) {
            pilihanLawan = `batu`
        }
        else if (randNumb <= 0.66) {
            pilihanLawan = `gunting`;
        }
        else if (randNumb <= 1) {
            pilihanLawan = `kertas`;
        }

        switch (pilihanAnda) {
            case `batu`:
                document.getElementById("batu").classList.add("d-none");
                document.getElementById("gunting").classList.add("d-none");
                document.getElementById("kertas").classList.add("d-none");
                document.getElementById("batu").classList.toggle("d-none");
                switch (pilihanLawan) {
                    case `batu`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("batuLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Seri"
                        break;
                    case `gunting`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Menang"
                        totalAnda += 1
                        break;
                    case `kertas`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Kalah"
                        totalLawan += 1
                        break;

                    default:
                        break;
                }
                break;
            case `gunting`:
                document.getElementById("batu").classList.add("d-none");
                document.getElementById("gunting").classList.add("d-none");
                document.getElementById("kertas").classList.add("d-none");
                document.getElementById("gunting").classList.toggle("d-none");
                switch (pilihanLawan) {
                    case `batu`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("batuLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Kalah"
                        totalLawan += 1
                        break;
                    case `gunting`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Seri"
                        break;
                    case `kertas`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Menang"
                        totalAnda += 1
                        break;

                    default:
                        break;
                }
                break;
            case `kertas`:
                document.getElementById("batu").classList.add("d-none");
                document.getElementById("gunting").classList.add("d-none");
                document.getElementById("kertas").classList.add("d-none");
                document.getElementById("kertas").classList.toggle("d-none");
                switch (pilihanLawan) {
                    case `batu`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("batuLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Menang"
                        totalAnda += 1
                        break;
                    case `gunting`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Kalah"
                        totalLawan += 1
                        break;
                    case `kertas`:
                        document.getElementById("batuLawan").classList.add("d-none");
                        document.getElementById("guntingLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.add("d-none");
                        document.getElementById("kertasLawan").classList.toggle("d-none");
                        document.getElementById("score").innerHTML = "Anda Seri"
                        break;

                    default:
                        break;
                }
                break;

            default:
                break;
        }
        document.getElementById("total").innerHTML = `${totalAnda} : ${totalLawan}`
    }
    return input(pilihanAnda, randNumb);
}
