class User < ApplicationRecord

    def self.randomUser

        max = User.all.length
        id = rand(1..max)
        id

    end


          # Datadog dogstatsd
    def self.randomHealth

    userTotal = 1

    statsd = Datadog::Statsd.new(socket_path: '/var/run/datadog', single_thread: true, buffer_max_pool_size: 1, tags: ['dogstastd:uds'])

        statsd.gauge('podrace_random_health', userTotal )


    statsd = Datadog::Statsd.new('localhost', 8125, tags: ['dogstastd:port'])

        statsd.gauge('podrace_random_health', userTotal )

    userTotal
    end



end
