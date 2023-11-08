class User < ApplicationRecord
    belongs_to :pod
    has_many :events

    def self.randomUser

        max = User.all.length
        id = rand(1..max)
        id

    end



end
