Doctor.destroy_all
Patient.destroy_all
Hospital.destroy_all

sacred = Hospital.find_or_create_by(name: "Sacred Heart")

jd = Doctor.find_or_create_by(name: "John Dorian", 
    specialty: "Internal Medicine", hospital_id: sacred.id)
turk = Doctor.find_or_create_by(name: "Chris Turk", 
    specialty: "Surgery", hospital_id: sacred.id)
eliot = Doctor.find_or_create_by(name: "Eliot Reid", 
    specialty: "Endocrinology", hospital: sacred)

johnny = Patient.find_or_create_by(name: "Johnny the Tackling Alzheimer's Patient")
wilke = Patient.find_or_create_by(name: "Mrs Wilke")

wilke.doctors << jd
wilke.doctors << turk 

eliot.patients << johnny
eliot.patients << wilke