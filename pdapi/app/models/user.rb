class User < ApplicationRecord

    def self.randomUser

        max = User.all.length
        id = rand(1..max)
        id

    end


end
