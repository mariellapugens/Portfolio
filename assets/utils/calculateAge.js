export function calculateAge(birthDate) {
  // Pega a data atual
  const today = new Date();

  // Converte a data de nascimento recebida para um objeto Date
  const birth = new Date(birthDate);

  // Calcula inicialmente a diferença entre os anos
  let age = today.getFullYear() - birth.getFullYear();

  // Verifica se a pessoa já fez aniversário este ano
  const hasHadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  // Se o aniversário ainda não aconteceu, diminui 1 ano da idade
  if (!hasHadBirthday) {
    age--;
  }

  // Retorna a idade calculada
  return age;
}
