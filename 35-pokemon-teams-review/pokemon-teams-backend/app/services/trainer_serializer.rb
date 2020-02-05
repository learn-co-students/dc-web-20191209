class TrainerSerializer

    def initialize(trainer_obj)
        @trainers = trainer_obj
    end

    def to_serialized_json
        @trainers
    end

end